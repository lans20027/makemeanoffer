export class Transaction {
  hash: string;
  ver: number;
  vin_sz: number;
  vout_sz: number;
  lock_time: string;
  size: number;
  relayed_by: string;
  block_height: number;
  tx_index: number;
  inputs: Input[];
  out: Output[];
}

class Input {
  prev_out: {
    hash: string;
    value: string;
    tx_index: string;
    n: string;
  };
  script: string;
}

class Output {
  value: string;
  hash: string;
  script: string;
}

