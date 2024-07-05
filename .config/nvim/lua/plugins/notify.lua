return {
  'rcarriga/nvim-notify',
  config = function()
    require("notify").setup({
      -- configurazioni opzionali
      timeout = 1000,
    })
    vim.notify = require("notify")
  end
}
