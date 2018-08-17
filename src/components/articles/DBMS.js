import React, {Component} from 'react';
import {Link} from 'react-router';

import cern from "../../images/cern.png"
import Cern_Database from "../../images/Cern_Database.png"

class DBMS extends Component {
  render() {
    return (
       <div>
       
	      <div className="main-content courses">
	        <div className="course-header group">
		          <h2> DBMS </h2>
		          <ul className="course-nav">
		          <h3> In Memory Database Tech </h3>
		          <img src = {cern} />
		          </ul>
	          </div>  
	       </div>
	       
	      <div> 
	      
          <pre>{`
        
          
https://d1o50x50snmhul.cloudfront.net/wp-content/uploads/2016/08/31180000/bbcrezqu1103-800x533.jpg

What is an In-Memory Database System? 


Jul 5, 2017 

Craig S. Mullins 

http://www.dbta.com/Columns/DBA-Corner/What-is-an-In-Memory-Database-
System-119241.aspx 

 

https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/1200px-SAP_2011_logo.svg.png 


 

As every DBA should know, DBMS data is typically persisted using disk storage. So the 
data is stored on disk and when it is later read or modified it has to be accessed and 
changed on disk. To optimize these processes, most DBMSes use a cache, or buffer 
pool, to stage data in memory when it is accessed. By moving the data to memory 
subsequent accesses to the same data can be more efficient because disk I/O can be 
bypassed. 

Of course, caching data in this manner has been done for years. It is a time-proven 
mechanism for optimizing data being accessed from a database. Nevertheless, 
constantly moving data from disk to memory and back can cause performance issues of 
its own. And there are more modern techniques for managing and storing data in 
memory. 

Which brings us to the in-memory database management system (IMDBMS), sometimes 
called a main memory database system. It might be tempting to quickly define an 
IMDBMS as one that uses memory instead of disk to store data. But this is not entirely 
correct. There are varied techniques and approaches that can be used to accomplish in-
memory database processing. 

One approach is to use solid state disk, or SSD, a data storage device that relies on 
memory chips instead of spinning disk to store persistent data. Although SSDs have 
been around for decades only recently has their price become reasonable for 


widespread adoption. So one way to move toward in-memory databases is to use SSDs 
for your database files. 

But it probably is not the best approach. Modern IMDBMS offerings provide more than a 
standard DBMS with data stored on an SSD. Today’s IMDBMS technology is designed 
and developed specifically for in-memory processing. It is not just storing the data in 
memory, but also performing operations in memory. Consider an RDBMS with table 
space files stored on SSDs. The RDBMS will still cache or buffer that data – it is a built-in 
function of the DBMS and it made sense when all data persistence was accomplished 
using disk storage. An IMDBMS is designed to understand that data is in memory and 
thereby can be optimized by removing many of the internal machinations used by 
traditional DBMS offerings… and that can have a profound impact on performance. 

Other functionality can be performed in-memory as well. For example, consider DB2 12 
for z/OS, which IBM and analysts are promoting as an in-memory DBMS. No, DB2 does 
not store all of its data in-memory, but it has many new capabilities for optimizing data 
and processing in-memory. One of these capabilities is the Fast Traversal Block, or FTB. 
An FTB is an in-memory structure that can be used with unique indexes. DB2 detects 
which indexes are frequently used for traversals, and when a threshold is hit DB2 will 
build an FTB for the index in a storage area outside the buffer pool. This causes the top 
levels of the index to be cached thereby making it efficient to perform very fast traversals 
through the cached levels of the index. DB2 delivers additional in-memory capabilities for 
improved buffer pool management, bigger buffer pools, and high volume insert 
processing. 

With an IMDBMS, all of the data may be stored in memory, perhaps in a compressed 
format to optimize data storage and access. Or the DBMS may offer hybrid capabilities 
combining in-memory and disk-based functionality. With a hybrid IMDBMS, databases 
can be designed that use both disk and memory to offset performance and cost. And 
performance gains can still be had because of the internal memory-optimized processes 
used by the IMDBMS. 

The Importance of Performance 

An IMDBMS is not just about storing all the data in memory instead of on disk. That is 
part of it, but the processing behind the scenes is also important. That said, performance 
is the most important strength of the IMDBMS when weighed against a disk-based 
option. 

As IMDBMS continues to grow its market share, there nevertheless are issues that must 
be overcome. Organizations may balk at adopting yet another DBMS requiring techies 
with a new skillset. And though memory is cheaper now than ever before, it is still more 
expensive than disk, so moving everything to memory is currently not feasible. 
Furthermore, traditional DBMSes (such as DB2) are adopting in-memory functionality 
and features, which may slow down the pace of adoption for newer in-memory database 
products. 

But the bottom line is that more database activities will be moving to in-memory 
processes over the next few years, and that should improve performance and our overall 
productivity. 

 


 

 

 

https://simplecore.intel.com/newsroom/wp-content/uploads/sites/11/2015/08/1302162_06-A4-at-144-dpi.jpg


          
          
          
          `}</pre>
        </div>
        <img src = {Cern_Database} />
      </div>
    );
  }
}

export default DBMS;
