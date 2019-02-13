import {MockedCpuIntensiveWorkerExternal} from './mocked-cpu-intensive-external.worker';
import {WorkerMessage} from './shared/worker-message.model';

describe('MockedCpuIntensiveWorkerExternal', () => {

  it('Should have doWork method defined', () => {
    expect(MockedCpuIntensiveWorkerExternal.doWork).toBeDefined();
  });

  it('Should perform doWork operation', () => {
    const workerMessage = {topic: 'cpuIntensiveExternal', data: {duration: 10}};
    expect(MockedCpuIntensiveWorkerExternal.doWork(WorkerMessage.getInstance(workerMessage)).data.iteration).toBeGreaterThan(0);
  });

});
