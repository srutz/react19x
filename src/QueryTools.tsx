import { type Query, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function QueryTools() {
  const [queries, setQueries] = useState<Query[]>([]);
  const [showData, setShowData] = useState<string | null>(null);
  const queryClient = useQueryClient();
  useEffect(() => {
    const cache = queryClient.getQueryCache();
    const cleanup = cache.subscribe(() => {
      setQueries(cache.getAll());
    });
    return cleanup;
  }, [queryClient]);
  return (
    <>
      <div className="absolute bottom-0 left-0 w-[90%] h-[200px] bg-zinc-900 text-white p-2 flex flex-col">
        <div className="font-bold mb-2 text-sm">Query Tools #{queries.length} Queries-Cached</div>
        <div className="h-1 grow overflow-auto mb-2">
          <table className="w-full text-left text-xs">
            <thead>
              <tr>
                <th className="pr-2">Key</th>
                <th className="pr-2">Status</th>
                <th className="pr-2">Data-Len</th>
                <th className="pr-2">Error</th>
              </tr>
            </thead>
            <tbody>
              {queries.map((query) => (
                <tr key={query.queryHash} className="align-top border-t border-zinc-700">
                  <td className="pr-2 align-top">{JSON.stringify(query.queryKey)}</td>
                  <td className="pr-2 align-top w-20">
                    {query.state.status}
                    <button type="button" onClick={() => queryClient.removeQueries({ queryKey: query.queryKey })}>
                      🗑
                    </button>
                  </td>
                  <td className="pr-2 align-top text-right w-16 gap-2">
                    {JSON.stringify(query.state.data)?.length}
                    <button type="button" onClick={() => setShowData(JSON.stringify(query.state.data, null, 2))}>
                      🛈
                    </button>
                  </td>
                  <td className="pr-2 align-top w-24">
                    {JSON.stringify(query.state.error, null, 2)?.substring(0, 16)}
                    <button type="button" onClick={() => setShowData(JSON.stringify(query.state.error, null, 2))}>
                      🛈
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showData && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black text-white p-4 overflow-auto flex flex-col gap-2">
          <button type="button" className="button self-end" onClick={() => setShowData(null)}>
            Close
          </button>
          <pre className="text-xs h-1 grow overflow-auto">{showData}</pre>
        </div>
      )}
    </>
  );
}
