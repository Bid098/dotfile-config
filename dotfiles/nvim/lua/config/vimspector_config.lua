local M = {}

-- Define Python debug profile template
local vimspector_python = [[
{
  "configurations": {
    "<name>: Launch": {
      "adapter": "debugpy",
      "configuration": {
        "name": "Python: Launch",
        "type": "python",
        "request": "launch",
        "python": "%s",
        "stopOnEntry": true,
        "console": "externalTerminal",
        "debugOptions": [],
        "program": "${file}"
      }
    }
  }
}
]]

-- Define .NET Core debug profile template
local vimspector_netcoredbg = [[
{
  "configurations": {
    "<name>: %s": {
      "adapter": "netcoredbg",
      "configuration": {
        "name": ".NET Core: %s",
        "type": "coreclr",
        "request": "%s",
        "program": "%s",
        "stopAtEntry": true,
        %s
      }
    }
  }
}
]]

function M.generate_debug_profile()
  local buf = vim.api.nvim_get_current_buf()
  local ft = vim.api.nvim_buf_get_option(buf, "filetype")

  local debugProfile
  if ft == "python" then
    local python3 = vim.fn.exepath "python"
    debugProfile = string.format(vimspector_python, python3)
  elseif ft == "cs" then
    local additionalConfig = ""
    local pgid = vim.fn.input("Process Group ID: ")
    additionalConfig = '"processId": "' .. pgid .. '"'
    local programPath = ""


    debugProfile = string.format(vimspector_netcoredbg, "attach", "attach","attach", "", additionalConfig)
  else
    print("Unsupported language - " .. ft)
    return
  end

  vim.api.nvim_exec("vsp", true)
  local win = vim.api.nvim_get_current_win()
  local bufNew = vim.api.nvim_create_buf(true, false)
  vim.api.nvim_buf_set_name(bufNew, ".vimspector.json")
  vim.api.nvim_win_set_buf(win, bufNew)

  local lines = {}
  for s in debugProfile:gmatch "[^\r\n]+" do
    table.insert(lines, s)
  end
  vim.api.nvim_buf_set_lines(bufNew, 0, -1, false, lines)
end

return M
