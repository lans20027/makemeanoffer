import { Component, OnInit } from '@angular/core';
import {BlockchainInfoService, BlockInfo} from './blockchain-info.service';
import {Transaction} from './transaction';
import {Block} from "./block";


@Component({
  selector: 'app-disser',
  templateUrl: './disser.component.html',
  styleUrls: ['./disser.component.css'],
  providers:[BlockchainInfoService]
})
export class DisserComponent implements OnInit {
  blocks: Block[] = [];

  constructor(private blockchainInfo: BlockchainInfoService) { }

  ngOnInit() {
  }

  /*
  * Method gets last block on the block chain
  * and calculate average value of transactions in block.
  * */
  getLastBlock() {
    this.blockchainInfo.getLastBlocks().then(res => {
      const resp = res as BlockInfo;
      this.blockchainInfo.getSingleBlock(resp.hash).then(ress => {
        const block = ress as Block;
        block.time = new Date(block.time);
        this.blocks.push(block);
      });
    });
  }
}
