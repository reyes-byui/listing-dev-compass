import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Clock, Users, Zap, Shield } from "lucide-react";

const Index = () => {
  const customFeatures = [
    "Custom property listing system",
    "Advanced search & filtering",
    "Property booking system",
    "User authentication & roles",
    "Admin dashboard",
    "Customer dashboard",
    "Property CRUD operations",
    "Image gallery management",
    "Email notifications",
    "Payment integration",
    "SEO optimization",
    "Mobile responsive design",
    "Analytics",
    "API development",
    "Custom database design",
    "Supabase integration (Free tier)",
    "Google Maps integration (Free tier)",
    "Performance optimization",
    "Security features",
    "Testing & deployment",
    "Comprehensive 30-Day Free Maintenance",
    "UI/UX Design"
  ];

  const wordpressFeatures = [
  "WordPress theme customization",
  "Premium property listing plugin (Estatik Pro, WP Real Estate Pro, etc.)",
  "Advanced search & filtering (premium add-on)",
  "Booking system integration (premium add-on)",
  "User management system",
  "Admin panel customization",
  "Content management setup",
  "Plugin configuration",
  "Email setup",
  "Payment gateway setup",
  "SEO plugin configuration",
  "Responsive design",
  "Analytics",
  "Theme installation",
  "Database setup",
  "Site deployment",
  "Security Setup",
  "Performance tuning",
  "Comprehensive 30-Day Free Maintenance",
  "Logo and Branding"
  ];

  const comparisons = [
    {
      feature: "Development Time",
      custom: { text: "8-12 weeks", icon: <Clock className="w-4 h-4" />, positive: false },
      wordpress: { text: "3-5 weeks", icon: <Clock className="w-4 h-4" />, positive: true }
    },
    {
      feature: "Initial Cost",
      custom: { text: "$10,000 - $15,000", icon: <XCircle className="w-4 h-4" />, positive: false },
      wordpress: { text: "$3,000 - $8,000", icon: <CheckCircle className="w-4 h-4" />, positive: true }
    },
    {
      feature: "Customization",
      custom: { text: "Unlimited", icon: <CheckCircle className="w-4 h-4" />, positive: true },
      wordpress: { text: "Limited to plugins", icon: <XCircle className="w-4 h-4" />, positive: false }
    },
    {
      feature: "Performance",
      custom: { text: "Optimized", icon: <Zap className="w-4 h-4" />, positive: true },
      wordpress: { text: "Plugin dependent", icon: <XCircle className="w-4 h-4" />, positive: false }
    },
    {
      feature: "Scalability",
      custom: { text: "High", icon: <CheckCircle className="w-4 h-4" />, positive: true },
      wordpress: { text: "Medium", icon: <XCircle className="w-4 h-4" />, positive: false }
    },
    {
      feature: "Security",
      custom: { text: "Custom security", icon: <Shield className="w-4 h-4" />, positive: true },
      wordpress: { text: "Plugin dependent", icon: <XCircle className="w-4 h-4" />, positive: false }
    },
    {
      feature: "Maintenance",
      custom: { text: "Requires developer", icon: <XCircle className="w-4 h-4" />, positive: false },
      wordpress: { text: "User-friendly", icon: <CheckCircle className="w-4 h-4" />, positive: true }
    },
    {
      feature: "Third-party Dependencies",
      custom: { text: "Minimal", icon: <CheckCircle className="w-4 h-4" />, positive: true },
      wordpress: { text: "High", icon: <XCircle className="w-4 h-4" />, positive: false }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl text-white font-bold mb-6">Real Estate Property Listing Site</h1>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Professional quotation for a comprehensive property listing platform with booking capabilities and full CRUD (Create, Read, Update, Delete) operations
          </p>
          <button
            onClick={() => window.print()}
            className="mb-8 inline-flex items-center gap-2 rounded-lg bg-white/20 px-6 py-3 text-white font-medium hover:bg-white/30 transition-colors print:hidden backdrop-blur-sm border border-white/20"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Comparison as PDF
          </button>
          <div className="flex items-center justify-center gap-4 text-white/80">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Multi-user System</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span>Property Booking</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Secure Platform</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Quotation Cards */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Development Options</h2>
          <div className="max-w-3xl mx-auto mb-8">
            {/* Payment Terms Section - moved to bottom */}
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Custom Development */}
            <Card className="border-2 border-professional/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-br from-professional to-professional/90 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2">Custom Development</CardTitle>
                    <CardDescription className="text-white/90">
                      Built from scratch with modern technologies
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-[#faee0a] text-black border-white/30">
                    Premium
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-4xl font-bold mb-2 text-professional">$10,000 - $15,000</div>
                  <div className="text-muted-foreground">12-16 weeks development</div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {customFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Technology Stack:</h4>
                    <p className="text-sm text-muted-foreground">React, Node.js, PostgreSQL, TypeScript, Tailwind CSS</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Hosting & Maintenance:</h4>
                    <p className="text-sm text-muted-foreground">$200-500/month (hosting + maintenance)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WordPress Development */}
            <Card className="border-2 border-muted shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-professional to-professional/90">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2 text-white">WordPress Solution</CardTitle>
                    <CardDescription className="text-white">
                      Built with WordPress and premium plugins
                    </CardDescription>
                  </div>
                  <Badge className="text-white" variant="outline">
                    Standard
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-4xl font-bold mb-2 text-foreground">$3,000 - $8,000</div>
                  <div className="text-muted-foreground">5-8 weeks development</div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {wordpressFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Technology Stack:</h4>
                    <p className="text-sm text-muted-foreground">WordPress, WP Real Estate Pro, WooCommerce, Custom Theme</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Hosting & Maintenance:</h4>
                    <p className="text-sm text-muted-foreground">$50-150/month (hosting + premium plugin licenses)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Detailed Comparison</h2>
          <div className="bg-card rounded-lg shadow-lg overflow-hidden max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-4 text-left font-semibold">Feature</th>
                    <th className="p-4 text-center font-semibold">Custom Development</th>
                    <th className="p-4 text-center font-semibold">WordPress Solution</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, index) => (
                    <tr key={index} className="border-t border-border">
                      <td className="p-4 font-medium">{item.feature}</td>
                      <td className="p-4 text-center">
                        <div className={`flex items-center justify-center gap-2 ${
                          item.custom.positive ? 'text-success' : 'text-muted-foreground'
                        }`}>
                          {item.custom.icon}
                          <span className="text-sm font-medium">{item.custom.text}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className={`flex items-center justify-center gap-2 ${
                          item.wordpress.positive ? 'text-success' : 'text-muted-foreground'
                        }`}>
                          {item.wordpress.icon}
                          <span className="text-sm font-medium">{item.wordpress.text}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Recommendations</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-success/20 bg-success/5">
              <CardHeader>
                <CardTitle className="text-success">Choose Custom Development If:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• You need unique, complex functionality</li>
                  <li>• Long-term scalability is crucial</li>
                  <li>• You have a larger budget</li>
                  <li>• Performance is a top priority</li>
                  <li>• You want full control over the codebase</li>
                  <li>• You plan to integrate with specific APIs</li>
                  <li>• You want a tailored user experience</li>
                  <li>• You need custom database structures and UI/UX customization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-warning/20 bg-warning/5">
              <CardHeader>
                <CardTitle className="text-warning">Choose WordPress If:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• You need a faster, budget-friendly solution</li>
                  <li>• Content management is important</li>
                  <li>• You prefer user-friendly administration</li>
                  <li>• Standard functionality meets your needs</li>
                  <li>• You want established plugin ecosystem (premium plugins recommended for advanced features)</li>
                  <li>• Quick deployment is essential</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cons Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Potential Drawbacks</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-destructive/20 bg-destructive/5">
              <CardHeader>
                <CardTitle className="text-destructive">Custom Development Cons</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Higher initial cost</li>
                  <li>• Longer development time</li>
                  <li>• Requires ongoing developer support for maintenance</li>
                  <li>• More complex to manage</li>
                  <li>• May require advanced technical skills for future changes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-muted/20 bg-muted/5">
              <CardHeader>
                <CardTitle className="text-muted-foreground">WordPress Solution Cons</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Limited customization compared to custom builds</li>
                  <li>• Dependent on plugins for advanced features</li>
                  <li>• Potential plugin conflicts and security risks</li>
                  <li>• Performance can be affected by plugin bloat</li>
                  <li>• Scalability is limited for very large or complex sites</li>
                  <li>• Higher long-term costs due to recurring plugin/theme renewals and ongoing maintenance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-professional rounded-2xl p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl text-white font-bold mb-4 text-foreground">Ready to Get Started?</h2>
            <p className="text-lg  text-white text-muted-foreground mb-8">
              Let's discuss your specific requirements and choose the best solution for your real estate business.
            </p>
            <button className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-professional font-medium hover:bg-white/50 hover:text-white transition-colors print:hidden">
                  <a href="https://herastreet.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 w-full h-full">Connect with Hera</a>
            </button>
          </div>
          {/* Payment Terms Section */}
          <div className="max-w-5xl mx-auto mt-12">
            <h2 className="text-4xl font-bold text-center mb-8 text-foreground">Payment Terms</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Custom Development</h3>
                <table className="w-full text-sm text-muted-foreground">
                  <thead>
                    <tr>
                      <th className="py-2 px-2 text-left">Payment</th>
                      <th className="py-2 px-2 text-left">Milestone</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-2 text-left">30%</td>
                      <td className="py-2 px-2 text-left">Deposit to start project</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 text-left">30%</td>
                      <td className="py-2 px-2 text-left">After design approval or major milestone</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 text-left">40%</td>
                      <td className="py-2 px-2 text-left">Upon completion and delivery</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">WordPress Solution</h3>
                <table className="w-full text-sm text-muted-foreground">
                  <thead>
                    <tr>
                      <th className="py-2 px-2 text-left">Payment</th>
                      <th className="py-2 px-2 text-left">Milestone</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-2 text-left">30%</td>
                      <td className="py-2 px-2 text-left">Deposit to start project</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 text-left">30%</td>
                      <td className="py-2 px-2 text-left">After plugin setup and design approval</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 text-left">40%</td>
                      <td className="py-2 px-2 text-left">Upon completion and delivery</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-2 text-xs text-muted-foreground">Plugin costs quoted separately if required.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;