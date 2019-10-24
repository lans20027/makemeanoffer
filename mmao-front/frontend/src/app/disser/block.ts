import {Transaction} from './transaction';

// represents a blockchain block
export class Block {
  hash: string;
  ver: number;
  prev_block: string;
  mrkl_root: string;
  time: any;
  bits: number;
  nonce: number;
  n_tx: number;
  size: number;
  block_index: number;
  height: number;
  received_time: number;
  relayed_by: string;
  tx: Transaction[];
}
