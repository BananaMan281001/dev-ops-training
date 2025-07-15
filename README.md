# dev-ops-training
A git repo to demonstrate different areas of dev ops and to continuously build new skills

# Steps to get running
1. Have Docker Desktop running
2. In the home directory, run `docker compose up -d`. This will run docker compose in detached mode.
3. To see the debug information for the frontend, run `docker compose logs -f frontend`
4. To see the debug information for the backend, run `docker compose logs -f backend`
5. Access front end server at http://localhost:3000/
6. To shut down the server, run `docker compose down`

# Notes
- Using BananaMan281001 git repo
- To see backend changes, the browser will need to be refreshed
- Front end changes will automatically change without needing to refresh the browser