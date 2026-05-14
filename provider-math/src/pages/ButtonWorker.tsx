export const ButtonWorker = () => {
    const handleClick = () => {
        const worker = new Worker(new URL('../workers/example.worker.ts', import.meta.url), {
        type: 'module'
        });

        const payload = { id: 1, message: "hola desde el main" };
        worker.postMessage(payload);

        worker.onmessage = (event: MessageEvent) => {
        console.log('[Main] Respuesta del worker:', event.data);
        };

        worker.onerror = (error) => {
        console.error('[Main] Error en el worker:', error);
        };
    }

    return (
        <button onClick={handleClick}>Example worker</button>
    )
}