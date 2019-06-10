import { Component, OnInit } from '@angular/core';

import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';
import Simple from '@editorjs/simple-image';
import Quote from '@editorjs/quote';
import Code from '@editorjs/code';
import Table from '@editorjs/table';
import Delimiter from '@editorjs/delimiter';
import CheckList from '@editorjs/checklist';
import List from '@editorjs/list';
import EditorJS from '@editorjs/editorjs';

@Component({
  selector: 'app-quiz-editor',
  templateUrl: './quiz-editor.component.html',
  styleUrls: ['./quiz-editor.component.css']
})

export class QuizEditorComponent implements OnInit {

  constructor() {}

  ngOnInit() {

    const editor = new EditorJS({
      holderId: 'quiz-editor-container',
      autofocus: true,
      placeholder: 'Start building your quiz!',
      tools: {
        paragraph: {
          class: Paragraph,
          inlineToolbar: true
        },
        header: {
          class: Header,
          inlineToolbar: true
        },
        simple: {
          class: Simple,
          inlineToolbar: true
        },
        quote: {
          class: Quote,
          inlineToolbar: true
        },
        code: {
          class: Code,
          inlineToolbar: true
        },
        table: {
          class: Table,
          inlineToolbar: true
        },
        delimiter: {
          class: Delimiter,
          inlineToolbar: true
        },
        checklist: {
          class: CheckList,
          inlineToolbar: true
        },
        list: {
          class: List,
          inlineToolbar: true
        }
      },
      initialBlock: 'header',
      data: {
        blocks: [
          {
            type: 'header',
            data: {
              text: 'Quiz Title',
              level: 1
            }
          },
          {
            type: 'header',
            data: {
              text: 'Name: ',
              level: 3
            }
          },
          {
            type: 'header',
            data: {
              text: 'Question #1',
              level: 4
            }
          },
          {
            type: 'paragraph',
            data: {
              text: 'This is the first question of the quiz. ' +
              'To add more content, use the block editor! ' +
              'To add a block, hit the enter key after your ' +
              'current block. To edit a block, use the settings to the ' +
              'right of the editor window. As you edit, hit the ' +
              '"Preview" button above to see what the quiz will actually ' +
              'look like.'
            }
          },
          {
            type: 'list',
            data: {
              style: 'ordered',
              items: [
                'Multiple',
                'Choice',
                'Answer',
                'Example'
              ]
            }
          },
          {
            type: 'delimiter',
            data: {}
          }
        ]
      }
    });
  }

}
