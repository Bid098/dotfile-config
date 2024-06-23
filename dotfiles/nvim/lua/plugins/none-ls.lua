return {
	"nvimtools/none-ls.nvim",
	config = function()
		local null_ls = require("null-ls")

		null_ls.setup({
			sources = {
				--Lua
				null_ls.builtins.formatting.stylua,

				--Go
				null_ls.builtins.diagnostics.golangci_lint.with({
					command = "golangci-lint",
					args = { "run", "--out-format", "json" },
				}),

				-- C#
				null_ls.builtins.formatting.csharpier,

				-- Python
				null_ls.builtins.formatting.black,
				--null_ls.builtins.diagnostics.flake8,

				-- JavaScript/TypeScript
				--null_ls.builtins.diagnostics.eslint_d,
				null_ls.builtins.formatting.prettier.with({
					filetypes = { "javascript", "javascriptreact", "typescript", "typescriptreact", "vue" },
				}),

				-- HTML/CSS
				null_ls.builtins.formatting.prettier.with({
					filetypes = { "html", "css", "scss", "less" },
				}),
			},
		})

		vim.keymap.set("n", "<A-F>", vim.lsp.buf.format, {})
	end,
}
