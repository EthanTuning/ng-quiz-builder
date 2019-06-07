import { Component, OnInit } from '@angular/core';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';
import Simple from '@editorjs/simple-image';
import Quote from '@editorjs/quote';
import Code from '@editorjs/code';
import Table from '@editorjs/table';
import Delimiter from '@editorjs/delimiter';
import CheckList from '@editorjs/checklist';
import List from '@editorjs/list';

@Component({
  selector: 'app-quiz-editor',
  templateUrl: './quiz-editor.component.html',
  styleUrls: ['./quiz-editor.component.css']
})

export class QuizEditorComponent implements OnInit {

  constructor() { }

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
              text: 'Question #1',
              level: 1
            }
          }
        ]
      }
    });

  }

}
