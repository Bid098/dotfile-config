local vimspector_config = require("config.vimspector_config")

return {
  {
    "puremourning/vimspector",
    lazy = false,
    config = function()
      -- Set up vimspector
      vim.g.vimspector_install_gadgets = {
        "debugpy",   -- Python
        "netcoredbg" -- .NET Core
      }

      -- Enable human-readable mappings
      vim.g.vimspector_enable_mappings = "HUMAN"

      -- Key mappings for vimspector
      vim.api.nvim_set_keymap("n", "<A-T>", "<cmd>call vimspector#Launch()<CR>",
        { noremap = true, silent = true, desc = "Launch Debugger" })
      vim.api.nvim_set_keymap("n", "<leader>sr", "<cmd>call vimspector#Reset()<CR>",
        { noremap = true, silent = true, desc = "Reset Debugger" })
      vim.api.nvim_set_keymap("n", "<F6>", "<cmd>call vimspector#Continue()<CR>",
        { noremap = true, silent = true, desc = "Continue Debugger" })
      vim.api.nvim_set_keymap("n", "<F9>", "<cmd>call vimspector#ToggleBreakpoint()<CR>",
        { noremap = true, silent = true, desc = "Toggle Breakpoint" })
      vim.api.nvim_set_keymap("n", "<leader>sbc", "<cmd>call vimspector#ClearBreakpoints()<CR>",
        { noremap = true, silent = true, desc = "Clear Breakpoints" })
      vim.api.nvim_set_keymap("n", "<F11>", "<cmd>call vimspector#StepOver()<CR>",
        { noremap = true, silent = true, desc = "Step Over" })
      vim.api.nvim_set_keymap("n", "<F10>", "<cmd>call vimspector#StepInto()<CR>",
        { noremap = true, silent = true, desc = "Step Into" })
      vim.api.nvim_set_keymap("n", "<leader>sso", "<cmd>call vimspector#StepOut()<CR>",
        { noremap = true, silent = true, desc = "Step Out" })
      vim.api.nvim_set_keymap("n", "<leader>sp",
        ":lua require('config.vimspector_config').generate_debug_profile()<CR>",
        { noremap = true, silent = true, desc = "Generate Debug Profile" })
    end,
  },
}
