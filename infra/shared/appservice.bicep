param name string
param location string
param tags object
param appServicePlanId string
param applicationInsightsName string
param allowedOrigins array
param nodeVersion string = '~14'

resource apiApp 'Microsoft.Web/sites@2021-02-01' = {
  name: name
  location: location
  tags: tags
  properties: {
    serverFarmId: appServicePlanId
    siteConfig: {
      appSettings: [
        {
          name: 'APPLICATIONINSIGHTS_CONNECTION_STRING'
          value: reference(resourceId('Microsoft.Insights/components', applicationInsightsName), '2020-02-02').ConnectionString
        }
        {
          name: 'WEBSITE_NODE_DEFAULT_VERSION'
          value: nodeVersion
        }
        {
          name: 'ALLOWED_ORIGINS'
          value: join(allowedOrigins, ',')
        }
      ]
    }
  }
}

output name string = apiApp.name
output defaultHostName string = apiApp.properties.defaultHostName
