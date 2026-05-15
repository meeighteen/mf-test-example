interface WorkerData {
  id: number;
  message: string;
}

self.onmessage = (event: MessageEvent<WorkerData>) => {
  const { id, message } = event.data;

  console.log(`[Worker] Received: ${message} (ID: ${id})`);

  const result = `Procesado: ${message.toUpperCase()}`;

  self.postMessage({
    id,
    result,
    status: 'success'
  });
};