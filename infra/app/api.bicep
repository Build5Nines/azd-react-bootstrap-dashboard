param name string
param location string
param tags object
param applicationInsightsName string
param allowedOrigins array

// Create the App Service Plan
module appServicePlan '../shared/appserviceplan.bicep' = {
  name: 'appServicePlan'
  params: {
    name: 'appServicePlan-${name}'
    location: location
    tags: tags
  }
}

// Create the App Service
module appService '../shared/appservice.bicep' = {
  name: 'appService'
  params: {
    name: name
    location: location
    tags: tags
    appServicePlanId: appServicePlan.outputs.id
    applicationInsightsName: applicationInsightsName
    allowedOrigins: allowedOrigins
  }
}

output appServicePlanId string = appServicePlan.outputs.id
output apiAppName string = appService.outputs.name
output apiAppUrl string = appService.outputs.defaultHostName
