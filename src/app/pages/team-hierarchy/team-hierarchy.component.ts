import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-team-hierarchy',
  templateUrl: './team-hierarchy.component.html',
  styleUrls: ['./team-hierarchy.component.scss']
})
export class TeamHierarchyComponent {

  data: TreeNode[] = [
    {
      expanded: true,
      type: 'person',
      styleClass: 'bg-indigo',
      data: {
        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
        name: 'Amy Elsner',
        title: 'National Business Manager'
      },
      children: [
        {
          expanded: true,
          type: 'person',
          styleClass: 'bg-purple',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
            name: 'Anna Fali',
            title: 'State Business Manager'
          },
          children: [
            {
              expanded: true,
          type: 'person',
          styleClass: 'bg-purple',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
            name: 'Preeti',
            title: 'Area Business Manager'
          },
              children: [
                {
                  expanded: true,
                  type: 'person',
                  styleClass: 'bg-purple',
                  data: {
                    image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                    name: 'Anna Fali',
                    title: 'Branch Business Manager'
                  },
                },
                {
                  expanded: true,
                  type: 'person',
                  styleClass: 'bg-purple',
                  data: {
                    image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                    name: 'Anna Fali',
                    title: 'Branch Business Manager'
                  },
                },
                {
                  expanded: true,
                  type: 'person',
                  styleClass: 'bg-purple',
                  data: {
                    image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                    name: 'Anna Fali',
                    title: 'Branch Business Manager'
                  },
                },
              ]
            },
            {
              expanded: true,
          type: 'person',
          styleClass: 'bg-purple',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
            name: 'Anna Fali',
            title: 'Area Business Manager'
          },
          children: [
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
          ]
            },
            {
              expanded: true,
          type: 'person',
          styleClass: 'bg-purple',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
            name: 'Ash',
            title: 'Area Business Manager'
          },
          children: [
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
          ]
            }
          ]
        },
        {
          expanded: true,
          type: 'person',
          styleClass: 'bg-teal',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
            name: 'Stephen Shaw',
            title: 'State Business Manager'
          },
          children: [
            {
              expanded: true,
          type: 'person',
          styleClass: 'bg-purple',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
            name: 'Preeti',
            title: 'Area Business Manager'
          },
              children: [
                {
                  expanded: true,
                  type: 'person',
                  styleClass: 'bg-purple',
                  data: {
                    image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                    name: 'Anna Fali',
                    title: 'Branch Business Manager'
                  },
                },
                {
                  expanded: true,
                  type: 'person',
                  styleClass: 'bg-purple',
                  data: {
                    image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                    name: 'Anna Fali',
                    title: 'Branch Business Manager'
                  },
                },
                {
                  expanded: true,
                  type: 'person',
                  styleClass: 'bg-purple',
                  data: {
                    image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                    name: 'Anna Fali',
                    title: 'Branch Business Manager'
                  },
                },
              ]
            },
            {
              expanded: true,
          type: 'person',
          styleClass: 'bg-purple',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
            name: 'Anna Fali',
            title: 'Area Business Manager'
          },
          children: [
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
          ]
            },
            {
              expanded: true,
          type: 'person',
          styleClass: 'bg-purple',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
            name: 'Ash',
            title: 'Area Business Manager'
          },
          children: [
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
          ]
            }
          ]
        },
        {
          expanded: true,
          type: 'person',
          styleClass: 'bg-teal',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
            name: 'Stephen Shaw',
            title: 'State Business Manager'
          },
          children: [
            {
              expanded: true,
          type: 'person',
          styleClass: 'bg-purple',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
            name: 'Preeti',
            title: 'Area Business Manager'
          },
              children: [
                {
                  expanded: true,
                  type: 'person',
                  styleClass: 'bg-purple',
                  data: {
                    image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                    name: 'Anna Fali',
                    title: 'Branch Business Manager'
                  },
                },
                {
                  expanded: true,
                  type: 'person',
                  styleClass: 'bg-purple',
                  data: {
                    image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                    name: 'Anna Fali',
                    title: 'Branch Business Manager'
                  },
                },
                {
                  expanded: true,
                  type: 'person',
                  styleClass: 'bg-purple',
                  data: {
                    image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                    name: 'Anna Fali',
                    title: 'Branch Business Manager'
                  },
                },
              ]
            },
            {
              expanded: true,
          type: 'person',
          styleClass: 'bg-purple',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
            name: 'Anna Fali',
            title: 'Area Business Manager'
          },
          children: [
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
          ]
            },
            {
              expanded: true,
          type: 'person',
          styleClass: 'bg-purple',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
            name: 'Ash',
            title: 'Area Business Manager'
          },
          children: [
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
          ]
            }
          ]
        },
        {
          expanded: true,
          type: 'person',
          styleClass: 'bg-teal',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
            name: 'Stephen Shaw',
            title: 'State Business Manager'
          },
          children: [
            {
              expanded: true,
          type: 'person',
          styleClass: 'bg-purple',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
            name: 'Preeti',
            title: 'Area Business Manager'
          },
              children: [
                {
                  expanded: true,
                  type: 'person',
                  styleClass: 'bg-purple',
                  data: {
                    image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                    name: 'Anna Fali',
                    title: 'Branch Business Manager'
                  },
                },
                {
                  expanded: true,
                  type: 'person',
                  styleClass: 'bg-purple',
                  data: {
                    image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                    name: 'Anna Fali',
                    title: 'Branch Business Manager'
                  },
                },
                {
                  expanded: true,
                  type: 'person',
                  styleClass: 'bg-purple',
                  data: {
                    image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                    name: 'Anna Fali',
                    title: 'Branch Business Manager'
                  },
                },
              ]
            },
            {
              expanded: true,
          type: 'person',
          styleClass: 'bg-purple',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
            name: 'Anna Fali',
            title: 'Area Business Manager'
          },
          children: [
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
          ]
            },
            {
              expanded: true,
          type: 'person',
          styleClass: 'bg-purple',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
            name: 'Ash',
            title: 'Area Business Manager'
          },
          children: [
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
          ]
            }
          ]
        },
        {
          expanded: true,
          type: 'person',
          styleClass: 'bg-teal',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
            name: 'Stephen Shaw',
            title: 'State Business Manager'
          },
          children: [
            {
              expanded: true,
          type: 'person',
          styleClass: 'bg-purple',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
            name: 'Preeti',
            title: 'Area Business Manager'
          },
              children: [
                {
                  expanded: true,
                  type: 'person',
                  styleClass: 'bg-purple',
                  data: {
                    image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                    name: 'Anna Fali',
                    title: 'Branch Business Manager'
                  },
                },
                {
                  expanded: true,
                  type: 'person',
                  styleClass: 'bg-purple',
                  data: {
                    image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                    name: 'Anna Fali',
                    title: 'Branch Business Manager'
                  },
                },
                {
                  expanded: true,
                  type: 'person',
                  styleClass: 'bg-purple',
                  data: {
                    image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                    name: 'Anna Fali',
                    title: 'Branch Business Manager'
                  },
                },
              ]
            },
            {
              expanded: true,
          type: 'person',
          styleClass: 'bg-purple',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
            name: 'Anna Fali',
            title: 'Area Business Manager'
          },
          children: [
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
          ]
            },
            {
              expanded: true,
          type: 'person',
          styleClass: 'bg-purple',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
            name: 'Ash',
            title: 'Area Business Manager'
          },
          children: [
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
          ]
            }
          ]
        },
        {
          expanded: true,
          type: 'person',
          styleClass: 'bg-teal',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
            name: 'Stephen Shaw',
            title: 'State Business Manager'
          },
          children: [
            {
              expanded: true,
          type: 'person',
          styleClass: 'bg-purple',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
            name: 'Preeti',
            title: 'Area Business Manager'
          },
              children: [
                {
                  expanded: true,
                  type: 'person',
                  styleClass: 'bg-purple',
                  data: {
                    image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                    name: 'Anna Fali',
                    title: 'Branch Business Manager'
                  },
                },
                {
                  expanded: true,
                  type: 'person',
                  styleClass: 'bg-purple',
                  data: {
                    image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                    name: 'Anna Fali',
                    title: 'Branch Business Manager'
                  },
                },
                {
                  expanded: true,
                  type: 'person',
                  styleClass: 'bg-purple',
                  data: {
                    image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                    name: 'Anna Fali',
                    title: 'Branch Business Manager'
                  },
                },
              ]
            },
            {
              expanded: true,
          type: 'person',
          styleClass: 'bg-purple',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
            name: 'Anna Fali',
            title: 'Area Business Manager'
          },
          children: [
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
          ]
            },
            {
              expanded: true,
          type: 'person',
          styleClass: 'bg-purple',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
            name: 'Ash',
            title: 'Area Business Manager'
          },
          children: [
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
            {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple',
              data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'Branch Business Manager'
              },
            },
          ]
            }
          ]
        }
      ]
    }
  ];

}
