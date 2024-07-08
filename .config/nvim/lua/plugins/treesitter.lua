return {
  "nvim-treesitter/nvim-treesitter",
  build = ":TSUpdate",
  config = function()
    local config = require("nvim-treesitter")

    config.setup({
      --doc: https://github.com/nvim-treesitter/nvim-treesitter
      --ricordati comando: :TSInstall nuova installazione
      ensure_installed = {
        "lua",
        "markdown",
        "markdown_inline",
        "go",
        "c_sharp",
        "javascript",
        "typescript",
        "python",
        "html",
        "css",
        "rust",
        "toml"
      },
      highlight = { enable = true },
      indent = { enable = true },
      auto_install = true,
    })
  end,
}
