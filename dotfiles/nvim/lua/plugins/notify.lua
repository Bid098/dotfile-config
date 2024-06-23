return {
    'rcarriga/nvim-notify',
    config = function()
      require("notify").setup({
        -- configurazioni opzionali
      })
      vim.notify = require("notify")
    end
  }
