import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { EditorComponent } from './editor/editor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule , NgxMonacoEditorConfig} from 'ngx-monaco-editor';
import { AceEditorModule } from 'ng2-ace-editor';
import { HeaderComponent } from './header/header.component';
import { DirectoryComponent } from './directory/directory.component';

const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: 'app-name/assets', // configure base path cotaining monaco-editor directory after build default: './assets'
  defaultOptions: { scrollBeyondLastLine: false }, // pass default options to be used
  onMonacoLoad: () => { console.log((<any>window).monaco); } // here monaco object will be available as window.monaco use this function to extend monaco editor functionalities.
};


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    EditorComponent,
    HeaderComponent,
    DirectoryComponent
  ],
  imports: [
    BrowserModule,
    MonacoEditorModule.forRoot(monacoConfig),
    FormsModule,
    AceEditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
