import { Component } from '@angular/core';
import { Header } from "../../../../layout/header/header";
import { Profile } from "../../../blog/components/profile/profile";

@Component({
  selector: 'app-dashboard-page',
  imports: [Header, Profile],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
})
export class DashboardPage {}
