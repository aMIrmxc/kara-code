- do not move components in homepagecontent.tsx , to seperate files. no need + ai cant easily read + styles may changes in new routes.


- pricing section that opus4.1 generates for pricing section in restaurant section :
'''tsx
 {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-6 inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 px-1 py-1 rounded-full">
              <span className="text-sm">Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Restaurant Website Packages
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto font-persian"
              dir="rtl"
            >
              پکیج‌های طراحی شده ویژه نیازهای رستوران‌ها و کافه‌ها
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm border ${
                  pkg.recommended ? "border-orange-400" : "border-white/10"
                } rounded-2xl p-8 relative ${
                  pkg.recommended ? "scale-105" : ""
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    پرطرفدارترین
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>
                <div
                  className="text-3xl font-bold text-orange-400 mb-6"
                  dir="rtl"
                >
                  {pkg.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span
                        className="text-gray-300 text-sm font-persian"
                        dir="rtl"
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    pkg.recommended
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-xl"
                      : "border border-white/30 text-white hover:bg-white/10"
                  }`}
                >
                  انتخاب پکیج
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
''' 



