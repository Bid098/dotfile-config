return {
	"nvim-lualine/lualine.nvim",
	config = function()
		require("lualine").setup({
			options = {
				theme = "gruvbox_dark", --"dracula",
			},
			sections = {
				lualine_a = { "mode" },
				lualine_b = { { "filename", path = 1 } },
				lualine_c = { "progress" },
				lualine_x = { },
				lualine_y = { "searchcount" },
				lualine_z = { "filetype" },
			},
			inactive_sections = {
				lualine_a = {},
				lualine_b = {},
				lualine_c = {},
				lualine_x = {},
				lualine_y = {},
				lualine_z = {},
			},
		})
	end,
}
