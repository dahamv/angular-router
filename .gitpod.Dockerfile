FROM gitpod/workspace-full

# Install custom tools, runtimes, etc.
# For example "bastet", a command-line tetris clone:
# RUN brew install bastet
#
# More information: https://www.gitpod.io/docs/config-docker/
RUN npm install -g @angular/cli

RUN sudo apt-get update; apt-get clean

# Add a user for running applications.
RUN sudo useradd apps
RUN sudo mkdir -p /home/apps && chown apps:apps /home/apps

# Install x11vnc.
RUN sudo apt-get install -y x11vnc

# Install xvfb.
RUN sudo apt-get install -y xvfb

# Install fluxbox.
RUN sudo apt-get install -y fluxbox

# Install wget.
RUN sudo apt-get install -y wget

# Install wmctrl.
RUN sudo apt-get install -y wmctrl

# Set the Chrome repo.
RUN sudo wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list

# Install Chrome.
RUN sudo apt-get update && apt-get -y install google-chrome-stable
