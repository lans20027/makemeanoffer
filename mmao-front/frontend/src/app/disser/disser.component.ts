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
  txArr: Transaction[] = [];
  targetTx = 1;

  constructor(private blockchainInfo: BlockchainInfoService) { }

  ngOnInit() {
  }

  analyse() {
    this.blockchainInfo.getLastBlocks(this.targetTx).then(res => {
      const resp = res as BlockInfo;
      this.blockchainInfo.getSingleBlock(resp.hash).then(ress => {
        const block = ress as Block;
        let i = 0;
        while(i < this.targetTx){
          this.txArr.push(block.tx[i]);
          console.log(JSON.stringify(block.tx[i]));
          i++;
        }
      });
    });
  }

}
