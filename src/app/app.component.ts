import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppConfig } from './app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {
    this.verifyLogin();
  }

  ngOnInit(): void {}

  private verifyLogin(){
    const url = AppConfig.API_ENDPOINT;

    const body = {
      "token": "eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJvaWQiOiI3NTBiM2I0Ny0xYzI3LTQ3ZTktYWE4My1lOGRmYTZjZGU3ZjQiLCJzdWIiOiI3NTBiM2I0Ny0xYzI3LTQ3ZTktYWE4My1lOGRmYTZjZGU3ZjQiLCJuYW1lIjoiU2FudGlhZ28gR29tZXoiLCJlbWFpbHMiOlsic2FudGlhZ28uZ29tZXpAaW1hZ2luZWFwcHMuY28iXSwidGZwIjoiQjJDXzFfbG9naW5vbmx5Iiwibm9uY2UiOiI2MzgyMDcyNDc2NDg4MTE0NTcuWlRRME1HUmhaV1V0TjJOaU1DMDBOalZqTFdGbU5tSXRNbUptWldJelpHRmxPV1JqWmpKaU5EQmtaR1F0WlRVM01DMDBZV00wTFRneU5qTXROV00zWXpoak56VmhNR001IiwiYXpwIjoiYTI4NzIyOGYtZWNiZi00MDZjLThhOWYtM2IxZTQxMDdkMzBhIiwidmVyIjoiMS4wIiwiaWF0IjoxNjg1MTI4MTM2LCJhdWQiOiJhMjg3MjI4Zi1lY2JmLTQwNmMtOGE5Zi0zYjFlNDEwN2QzMGEiLCJleHAiOjE2ODUxMzE3MzYsImlzcyI6Imh0dHBzOi8vc3NvbG9neWNhZGV2LmIyY2xvZ2luLmNvbS9lM2JlMjJlMS0xOGRmLTRhMWEtODhkZS00NzE3NzllMDQwMGEvdjIuMC8iLCJuYmYiOjE2ODUxMjgxMzZ9.Da8-CwLwhm0bTbG51tnIzECzui7D2oft1Lqqqt9-YQ6apEWYMWcamO5Wbjx8hPart4aNYFtvKGVCkGVxPwRW67spovKq-Fb0IKNgqHa1TAnKD1D4RWOB5Wun_nOGWK6dZsyNzrUEOjNulhE4eSd622lN0mrAvRiueTeT_bc52mC9WhtV8zgBtilLwAd0MQDimB40kOlFhgXWon8q_f_lF1Ip4dStmFzBWBTcIoJV5mmj2p0RK2-YQgLxQ9z34JxrI-HXQYCZtvoctWDiw-PCuJ71a_ULzMF0hPgkQukn97jKqG0nlamEDz78ak54Ek7dzcQ9-QuLGuirY-F5DwrRag",
      "email": "santiago.gomez@imagineapps.co",
      "refresh": "eyJraWQiOiJjcGltY29yZV8wOTI1MjAxNSIsInZlciI6IjEuMCIsInppcCI6IkRlZmxhdGUiLCJzZXIiOiIxLjAifQ..E3E9H1yugLP18DPg.dcbce-r5InNxvctvseLFm2ourWAsXEWUuS-dzjl6Mbfk2RHz_1EkgilQ-W4bb61M3UTihMgc6HxYktdQl91T2a7ZPz_ovGMYjEKNnoBvVoG66wceKL1smuZeQ7xvD6nTZ9noI1WxLEmvlmCzKL9XsxZRcO1H5ftebsK-tHgu0vOZcFqSnqnE_U1heOBzZmK3VXwNKE8snx4AeJAAEyMmddlgi0BugTzo70D1r-JcCShGZrU5dODYzLfs7MZc_bVULuCqwS17knWQO89pvqoFkZpkIqclWsuAGfKKIcRrLTTLey3KM55bsekqplanN4jegpiQBP70Tjl8z2EMAVM6ipKmqLMR-SvuAje1JSFZMAKe6JPrBWJu903sQCWyphTN354JsH9i0q2LlXMvCIFlqGaeXQ5bo9f44Z31c-8cjIwYY0R4jHuECcTF97QTIYue62waQhtWFb32y1uGRsODBxv0CqdEcU0UWH2GH9OavReO4uhbddk7uwElJGaq8oqgeAJ6Jsumx-wF96xsZJR8frcSO0EzhoHJPxg1_YETraUY6EdiHKiUQlFJs99h7tLmGZ7jQ79Vnk4mvtq05GcTdYHv1-4jmEIeuAhFMGWDR8AayEnIvbKzW3ahJeLU2bZIpbvmF3aH44B4ti9misE7wHE3HVP6TqWTBoMtB9Xckm_M_LsmqpF-_qkKL7zA90wAIYsMHyY7bRmFQZ4_TT3Llze73WRK71jgwjJiTP9hyEEbOaymkWIHEVvKsP22vkGjPie2I8tvHskZ5tcekfr-40K3Wa_R._1DX2PuawYEm8GPxpPSJFA"
    }


    // Realizar la llamada HTTP con los headers
    this.http.post(`${url}/login`, { 'user': body.email, 'token': body.token, 'refresh': body.refresh }).subscribe(response => {
      console.log("response", response);
    });
  }
}
