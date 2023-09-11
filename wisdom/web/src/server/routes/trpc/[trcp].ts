import { appRouter } from '../../trcp/routers';
import { createContext } from '../../trcp/context';
import { createTrpcNitroHandler } from '@analogjs/trpc';
// export API handler
export default createTrpcNitroHandler({
  router: appRouter,
  createContext,
});
