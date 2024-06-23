return {
  {
    "williamboman/mason.nvim",
    lazy = false,
    config = function()
      require("mason").setup()
    end,
  },
  {
    "williamboman/mason-lspconfig.nvim",
    lazy = false,
    opts = {
      auto_install = true,
    },
    config = function()
      --ricordati di installare LSP da Manson
      require("mason-lspconfig").setup({
        ensure_installed = {
          "lua_ls",
          "gopls",
          "golangci_lint_ls",
          "pylsp",
          "sqlls",
          --"csharp_ls",
          "omnisharp",
          --"dartls",
          "tsserver",
          "cssls",
          "marksman",
          "html",
        },
      })
    end,
  },
  {
    "neovim/nvim-lspconfig",
    lazy = false,
    config = function()
      --doc: https://github.com/williamboman/mason-lspconfig.nvim

      local lspconfig = require("lspconfig")

      --lua
      lspconfig.lua_ls.setup({})

      --lspconfig.csharp_ls.setup({})
      --lspconfig.

      --go
      lspconfig.gopls.setup({})
      lspconfig.golangci_lint_ls.setup({})

      --dart
      --lspconfig.setup_servers({'dartls', force = true})

      --python
      lspconfig.pylsp.setup({})

      --sql
      lspconfig.sqlls.setup({})

      --typescrypt + javascript
      lspconfig.tsserver.setup({})

      --css
      lspconfig.cssls.setup({})

      --html
      lspconfig.html.setup({})

      --markdown
      lspconfig.marksman.setup({})

      vim.keymap.set("n", "<F1>", vim.lsp.buf.hover, {})
      vim.keymap.set("n", "<F12>", vim.lsp.buf.definition, {})
      vim.keymap.set("n", "<F2>", vim.lsp.buf.rename, {})
      vim.keymap.set("n", "<leader>lr", vim.lsp.buf.references, {})
      --vim.keymap.set("n", "<leader>ld", vim.lsp.buf.display, {}) todo
      vim.keymap.set("n", "<A-CR>", vim.lsp.buf.code_action, {})
    end,
  },
}
