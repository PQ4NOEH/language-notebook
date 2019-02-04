import React from 'react';
import _ from 'lodash';

import StackCoverCard from './StackCoverCard';
import StackSink from './StackSink';
import WordStacksSummary from '../state/WordStacksSummaryReducer';

const StackContext = () =>{
  const summaryChuncks = _.chunk(WordStacksSummary(), 3);
  return  <div className="row">
      <div className="col-2" >
        <StackSink />
      </div>
      {
        <div className="col-10">
          <div className="container-fluent">
          { 
            summaryChuncks.map(chunk=>{
              return <div className="row mb-2 mt-2" >
                {
                  chunk.map(s=> <div className="col-4 " >
                    <StackCoverCard summary={s} key={s.name}/>
                    </div>
                  )
                }
              </div>
            })
          }
          </div>
        </div>
      }
    </div>
}

  export default StackContext;