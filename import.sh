if which tar &> /dev/null
then
  echo "tar exists."
else
    sudo pacman -S tar
fi

mkdir out
mkdir out/hypr
mkdir out/waybar
mkdir out/nvim

tar -xzvf data/hypr -C out/hypr
tar -xzvf data/nvim -C out/nvim
tar -xzvf data/waybar -C out/waybar

mv ~/.config/hypr ~/.config/hypr_bkp
mv ~/.config/nvim ~/.config/nvim_bkp
mv ~/.config/waybar ~/.config/waybar_bkp

mv out/hypr ~/.config/hypr
mv out/nvim ~/.config/nvim
mv out/waybar ~/.config/waybar


