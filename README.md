# My dotfile configuration

This is my dotfile configuration, it will be shared between the years.

# Requirements

## arch

```shell
sudo pacman -S git stow kitty nvim mako waybar btop
```

## ubuntu

```shell
sudo apt-get install git stow kitty nvim mako waybar btop alacritty tmux
```

# Content

- .bashrc
- .config/
    - btop
    - hypr
    - kitty
    - mako
    - nvim
    - waybar
    - alacritty
    - tmux

# Installation

```shell
git clone "this repo" ~/shared-dotfiles
cd shared-dotfiles
stow .
```
