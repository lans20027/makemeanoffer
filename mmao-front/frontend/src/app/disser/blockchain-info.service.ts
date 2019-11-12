import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';


export class BlockInfo {
  hash: string;
  time: number;
  block_index: string;
  height: number;
  txIndexes: number[];
}

@Injectable({
  providedIn: 'root'
})
export class BlockchainInfoService {
  bcApiUrl = environment.bcApiUrl;
  lastestBlockUrl = this.bcApiUrl + environment.bcLatest;
  singleTxUrl = this.bcApiUrl + environment.bcSingleTx;
  singleBlockUrl = this.bcApiUrl + environment.bcSingleBlock;
  oneDayBlocks = this.bcApiUrl + environment.bcForOneDay;

  constructor(private httpClient: HttpClient) { }

  getBlocksByTime(time: any): Promise<any> {
    return this.httpClient.get('https://blockchain.info/blocks/' + `${time}` + '?format=json&cors=true').toPromise();
  }

  getLastBlocks() {
    return this.httpClient.get(this.lastestBlockUrl + '?cors=true').toPromise();
  }

  getSingleTx(txHash: number) {
    return this.httpClient.get(this.singleTxUrl + `${txHash}` + '?cors=true').toPromise();
  }

  getSingleBlock(blockhash: string) {
    return this.httpClient.get(this.singleBlockUrl + `${blockhash}` + '?cors=true').toPromise();
  }


}
