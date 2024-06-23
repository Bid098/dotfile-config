return {
	{
		"nvim-telescope/telescope.nvim",
		tag = "0.1.6",
		dependencies = { "nvim-lua/plenary.nvim" },
		config = function()
			local default_opts = { noremap = true }
			vim.keymap.set(
				"n",
				"<leader>tf",
				"<cmd>lua require'telescope.builtin'.find_files({ find_command = {'rg', '--files', '--hidden', '-g', '!.git' }})<cr>",
				default_opts
			)
			vim.keymap.set(
				"n",
				"<A-G>",
				"<cmd>lua require'telescope.builtin'.live_grep({ find_command = {'rg', '--files', '--hidden', '-g', '!.git' }})<cr>",
				default_opts
			)
			vim.keymap.set(
				"n",
				"<leader>tb",
				"<cmd>lua require'telescope.builtin'.buffers({ show_all_buffers = true })<cr>",
				default_opts
			)
		end,
	},
	{
		"nvim-telescope/telescope-ui-select.nvim",
		config = function()
			require("telescope").setup({
				defaults = {
					mappings = {
						i = {
							["<C-h>"] = "which_key",
						},
					},
				},
				extensions = {
					["ui-select"] = {
						require("telescope.themes").get_dropdown({}),
					},
				},
			})
			require("telescope").load_extension("ui-select")
		end,
	},
}
