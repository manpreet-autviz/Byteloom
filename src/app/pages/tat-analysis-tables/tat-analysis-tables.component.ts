import { ChangeDetectorRef, Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
@Component({
  selector: 'app-tat-analysis-tables',
  templateUrl: './tat-analysis-tables.component.html',
  styleUrls: ['./tat-analysis-tables.component.scss']
})
export class TatAnalysisTablesComponent {
  states: string[] = [
    'Pan India',
    'Punjab',
    'Haryana',
    'NCR',
    'Rajasthan',
    'Gujarat',
    'MP',
    'Maharashtra',
  ];
  filters: string[] = [
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    // 'Select custom'
  ];

  selectedState: string = 'Pan India';
  selectedFilter: string = 'September';
  showContent!: boolean;
  files!: TreeNode[
    
  ];
  

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.initializeChart();
  }

  ngOnInit(){
  this.files = [
  {  
      "data":{  
          "name":"Applications",
          "size":"200mb",
          "type":"Folder"
      },
      "children":[  
          {  
              "data":{  
                  "name":"Angular",
                  "size":"25mb",
                  "type":"Folder"
              },
             
          },
          {  
              "data":{  
                  "name":"editor.app",
                  "size":"25mb",
                  "type":"Application"
              }
          },
          {  
              "data":{  
                  "name":"settings.app",
                  "size":"50mb",
                  "type":"Application"
              }
          }
      ]
  },
  {  
      "data":{  
          "name":"Cloud",
          "size":"20mb",
          "type":"Folder"
      },
      "children":[  
          {  
              "data":{  
                  "name":"backup-1.zip",
                  "size":"10mb",
                  "type":"Zip"
              }
          },
          {  
              "data":{  
                  "name":"backup-2.zip",
                  "size":"10mb",
                  "type":"Zip"
              }
          }
      ]
  },
  {  
      "data": {  
          "name":"Desktop",
          "size":"150kb",
          "type":"Folder"
      },
      "children":[  
          {  
              "data":{  
                  "name":"note-meeting.txt",
                  "size":"50kb",
                  "type":"Text"
              }
          },
          {  
              "data":{  
                  "name":"note-todo.txt",
                  "size":"100kb",
                  "type":"Text"
              }
          }
      ]
  },
  {  
      "data":{  
          "name":"Documents",
          "size":"75kb",
          "type":"Folder"
      },
      "children":[
          {  
              "data":{  
                  "name":"Work",
                  "size":"55kb",
                  "type":"Folder"
              },
           
          },
          {  
              "data":{  
                  "name":"Home",
                  "size":"20kb",
                  "type":"Folder"
              },
             
          }
      ]
  },
  {  
      "data": {  
          "name":"Downloads",
          "size":"25mb",
          "type":"Folder"
      },
      "children":[  
          {  
              "data": {  
                  "name":"Spanish",
                  "size":"10mb",
                  "type":"Folder"
              },
             
          },
          {  
              "data":{  
                  "name":"Travel",
                  "size":"15mb",
                  "type":"Text"
              },
              
          }
      ]
  },
  {  
      "data": {  
          "name":"Main",
          "size":"50mb",
          "type":"Folder"
      },
      "children":[  
          {  
              "data":{  
                  "name":"bin",
                  "size":"50kb",
                  "type":"Link"
              }
          },
          {  
              "data":{  
                  "name":"etc",
                  "size":"100kb",
                  "type":"Link"
              }
          },
          {  
              "data":{  
                  "name":"var",
                  "size":"100kb",
                  "type":"Link"
              }
          }
      ]
  },
  {  
      "data":{  
          "name":"Other",
          "size":"5mb",
          "type":"Folder"
      },
      "children":[  
          {  
              "data":{  
                  "name":"todo.txt",
                  "size":"3mb",
                  "type":"Text"
              }
          },
          {  
              "data":{  
                  "name":"logo.png",
                  "size":"2mb",
                  "type":"Picture"
              }
          }
      ]
  },
  {  
      "data":{  
          "name":"Pictures",
          "size":"150kb",
          "type":"Folder"
      },
      "children":[  
          {  
              "data":{  
                  "name":"barcelona.jpg",
                  "size":"90kb",
                  "type":"Picture"
              }
          },
          {  
              "data":{  
                  "name":"primeng.png",
                  "size":"30kb",
                  "type":"Picture"
              }
          },
          {  
              "data":{  
                  "name":"prime.jpg",
                  "size":"30kb",
                  "type":"Picture"
              }
          }
      ]
  },
  {  
      "data":{  
          "name":"Videos",
          "size":"1500mb",
          "type":"Folder"
      },
      "children":[  
          {  
              "data":{  
                  "name":"primefaces.mkv",
                  "size":"1000mb",
                  "type":"Video"
              }
          },
          {  
              "data":{  
                  "name":"intro.avi",
                  "size":"500mb",
                  "type":"Video"
              }
          }
      ]
  }
]
}


  initializeChart() {}

  onFilterChange(selectedValue: string) {
    
  }

 

  onStateChange(selectedValue: string) {
    
   
  }

  toggleContent() {}
}

