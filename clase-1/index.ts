import { PORT } from "./config";
import { server } from "./src/server";

const runServer = () => {
  try {
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`http://localhost:${PORT}/`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

runServer();
