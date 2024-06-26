return {
  "vim-test/vim-test",
  dependencies = {
    "preservim/vimux"
  },
  config = function()
    vim.keymap.set("n", "<leader>dtn", ":TestNearest<CR>", {})
    vim.keymap.set("n", "<leader>dtf", ":TestFile<CR>", {})
    vim.keymap.set("n", "<leader>dts", ":TestSuite<CR>", {})
    vim.keymap.set("n", "<leader>dtl", ":TestLast<CR>", {})
    vim.keymap.set("n", "<leader>dtv", ":TestVisit<CR>", {})
    vim.cmd("let test#strategy = 'vimux'")
  end,
}
