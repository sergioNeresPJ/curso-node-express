import { server } from "./server/server.js";


server.listen(process.env.PORT || 3333, () => {
  console.log(`Escutando na porta: ${process.env.PORT || 3333}`);
});