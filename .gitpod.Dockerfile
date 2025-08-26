FROM gitpod/workspace-full:latest

WORKDIR /workspace/web

# Copy package.json only with correct owner
COPY --chown=gitpod:gitpod web/package.json ./

# Install dependencies as gitpod user
USER gitpod
RUN npm install --force

# Copy all project files
COPY --chown=gitpod:gitpod web/ .

EXPOSE 3000
CMD ["npm", "start"]

