import { Component, OnInit } from '@angular/core';
import {BlockchainInfoService, BlockInfo} from './blockchain-info.service';
import {Block} from './block';



@Component({
  selector: 'app-disser',
  templateUrl: './disser.component.html',
  styleUrls: ['./disser.component.css'],
  providers:[BlockchainInfoService]
})
export class DisserComponent implements OnInit {
  blocks: Block[] = [];
  i = 0;


  constructor(private blockchainInfo: BlockchainInfoService) { }

  ngOnInit() {
    // this.getLastBlock();
    this.getBlocksByToday();
  }

  /*
  * Method gets last block on the block chain
  * */
  getLastBlock() {
    this.blockchainInfo.getLastBlocks().then(res => {
      const resp = res as BlockInfo;
      this.blockchainInfo.getSingleBlock(resp.hash).then(ress => {
        const block = ress as Block;
        this.blocks.push(block);
        this.calculateAverageTx(block);
        this.getBlocks(block, 20);
      });
    });
  }

  getBlocks(initialBlock: Block, count: number) {
    if (this.i < count) {
      this.blockchainInfo.getSingleBlock(this.blocks[this.i].prev_block).then(res => {
        this.blocks.push(res as Block);
        this.i++;
        this.getBlocks(this.blocks[this.i], 20);
      });
    }
  }


  getBlocksByToday() {
    const today = new Date();
    console.log(today.getTime());
    this.blockchainInfo.getBlocksByTime(today.getTime()).then(res => {
        this.blocks = res.blocks as Block[];
        let i = 0;
        const len = this.blocks.length;
      }
    );
  }




  calculateAverageTx(block: Block) {
    let inputs = 0.0;
    let inputCount = 0;
    block.tx.forEach(value => {
      let tempInputs = 0.0;
      value.inputs.forEach(input => {
        if (input.prev_out !== undefined) {
          tempInputs += Number(input.prev_out.value) / 100000000.0;
        }
      });
      inputCount ++;
      inputs += tempInputs;
    });
    console.log(inputs);
    console.log(inputCount);
    console.log(inputs / inputCount);
  }





}
