export const ButtonWorker = () => {
    const handleClick = () => {
        const worker = new Worker(new URL('../workers/example.worker.ts', import.meta.url), {
        type: 'module'
        });

        const payload = { id: 1, message: "Hello from the main thread" };
        worker.postMessage(payload);

        worker.onmessage = (event: MessageEvent) => {
        console.log('[Main] worker has anwsered:', event.data);
        };

        worker.onerror = (error) => {
        console.error('[Main] Error at worker:', error);
        };
    }

    return (
        <button onClick={handleClick}>Press me to start worker</button>
    )
}