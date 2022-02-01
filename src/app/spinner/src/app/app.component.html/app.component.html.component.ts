import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { App.Component.HtmlDataSource, App.Component.HtmlItem } from './app.component.html-datasource';

@Component({
  selector: 'app-app.component.html',
  templateUrl: './app.component.html.component.html',
  styleUrls: ['./app.component.html.component.scss']
})
export class App.Component.HtmlComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<App.Component.HtmlItem>;
  dataSource: App.Component.HtmlDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new App.Component.HtmlDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
