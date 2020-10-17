FROM gitpod/workspace-full

# Install custom tools, runtimes, etc.
# For example "bastet", a command-line tetris clone:
# RUN brew install bastet
#
# More information: https://www.gitpod.io/docs/config-docker/
RUN npm install -g @angular/cli
RUN mkdir /workspace/chrome
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb -P /workspace/chrome
RUN sudo dpkg -i /workspace/chrome/google-chrome-stable_current_amd64.deb
