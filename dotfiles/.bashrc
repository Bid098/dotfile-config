#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
alias grep='grep --color=auto'
PS1='[\u@\h \W]\$ '
export PATH=$PATH:/usr/share/dotnet
export PATH=$PATH:$HOME/.dotnet/tools
export PATH="$HOME/.local/bin":$PATH
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
# neofetch
alias bye='systemctl poweroff'
