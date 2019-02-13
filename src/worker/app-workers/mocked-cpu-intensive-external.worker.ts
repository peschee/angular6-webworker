import * as moment from 'moment';
import { WorkerMessage } from './shared/worker-message.model';

export class MockedCpuIntensiveWorkerExternal {

  public static doWork(value: WorkerMessage): WorkerMessage {
    const before = moment();
    let count = 0;
    while (true) {
      count++;
      const now = moment();
      if (now.diff(before, 'seconds') > value.data.duration / 1000) {
        break;
      }
    }
    return new WorkerMessage(value.topic, { iteration: count });
  }
}
