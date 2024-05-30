if which tar &> /dev/null
then
    echo "tar exists."
else
    sudo pacman -S tar
fi

current_dir=$(pwd)
echo $current_dir

cd ~/.config/hypr/
tar -czvf ~/hypr.tar.gz . 
cd ../waybar/
tar -czvf ~/waybar.tar.gz .
cd ../nvim/
tar -czvf ~/nvim.tar.gz .

mv ~/hypr.tar.gz "$current_dir/data/hypr" 
mv ~/waybar.tar.gz "$current_dir/data/waybar"
mv ~/nvim.tar.gz "$current_dir/data/nvim"

echo "done"
