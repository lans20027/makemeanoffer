import { Component, OnInit } from '@angular/core';
import {BlockchainInfoService, BlockInfo} from './blockchain-info.service';
import {Transaction} from './transaction';


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
        const tx = ress as Transaction;
        this.txArr.push(tx);
      });
    });
  }

}
