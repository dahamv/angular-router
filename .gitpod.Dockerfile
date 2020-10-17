FROM gitpod/workspace-full

# Install custom tools, runtimes, etc.
# For example "bastet", a command-line tetris clone:
# RUN brew install bastet
#
# More information: https://www.gitpod.io/docs/config-docker/
RUN npm install -g @angular/cli
RUN sudo mkdir -p /workspace/chrome
RUN sudo wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb -P /workspace/chrome
RUN sudo apt-get update
RUN sudo apt-get install libgconf2-4 libnss3-1d libxss1
RUN sudo dpkg -i /workspace/chrome/google-chrome-stable_current_amd64.deb
