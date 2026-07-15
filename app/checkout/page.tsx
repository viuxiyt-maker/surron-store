"use client";

import { useState } from "react";

export default function CheckoutPage() {

  const stripeLink =
    "https://buy.stripe.com/test_aFa7sEfhibx4eyoaxSgfu00";

  const [loading, setLoading] = useState(false);


  async function handlePayment(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    const form = new FormData(e.currentTarget);


    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: form.get("name"),
        surname: form.get("surname"),
        email: form.get("email"),
        phone: form.get("phone"),
        street: form.get("street"),
        postalCode: form.get("postalCode"),
        city: form.get("city"),
        notes: form.get("notes"),
      }),
    });


    if (!res.ok) {
      alert("Nie udało się wysłać zamówienia ❌");
      setLoading(false);
      return;
    }


    window.location.href = stripeLink;
  }



  return (
    <main className="min-h-screen bg-[#050507] text-white py-20">

      <div className="max-w-7xl mx-auto px-8">


        <h1 className="text-5xl font-black mb-4">
          Finalizacja zamówienia
        </h1>


        <p className="text-gray-400 mb-12">
          Uzupełnij swoje dane i przejdź do bezpiecznej płatności Stripe.
        </p>



        <div className="grid lg:grid-cols-3 gap-10">



          <div className="lg:col-span-2 bg-[#0b0b10] rounded-3xl border border-purple-500/20 p-8">


            <form
              className="space-y-8"
              onSubmit={handlePayment}
            >


              <div>

                <h2 className="text-2xl font-bold mb-6">
                  Dane klienta
                </h2>


                <div className="grid md:grid-cols-2 gap-6">


                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="Imię"
                    className="bg-[#111118] rounded-xl p-4 border border-white/10 focus:border-purple-500 outline-none"
                  />


                  <input
                    name="surname"
                    required
                    type="text"
                    placeholder="Nazwisko"
                    className="bg-[#111118] rounded-xl p-4 border border-white/10 focus:border-purple-500 outline-none"
                  />


                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="Adres e-mail"
                    className="bg-[#111118] rounded-xl p-4 border border-white/10 focus:border-purple-500 outline-none"
                  />


                  <input
                    name="phone"
                    required
                    type="tel"
                    placeholder="Numer telefonu"
                    className="bg-[#111118] rounded-xl p-4 border border-white/10 focus:border-purple-500 outline-none"
                  />


                </div>

              </div>




              <div>


                <h2 className="text-2xl font-bold mb-6">
                  Adres dostawy
                </h2>


                <div className="space-y-6">


                  <input
                    name="street"
                    required
                    type="text"
                    placeholder="Ulica i numer domu"
                    className="w-full bg-[#111118] rounded-xl p-4 border border-white/10 focus:border-purple-500 outline-none"
                  />



                  <div className="grid md:grid-cols-2 gap-6">


                    <input
                      name="postalCode"
                      required
                      type="text"
                      placeholder="Kod pocztowy"
                      className="bg-[#111118] rounded-xl p-4 border border-white/10 focus:border-purple-500 outline-none"
                    />


                    <input
                      name="city"
                      required
                      type="text"
                      placeholder="Miasto"
                      className="bg-[#111118] rounded-xl p-4 border border-white/10 focus:border-purple-500 outline-none"
                    />


                  </div>


                </div>


              </div>




              <div>


                <h2 className="text-2xl font-bold mb-6">
                  Uwagi do zamówienia
                </h2>


                <textarea
                  name="notes"
                  rows={5}
                  placeholder="Dodatkowe informacje..."
                  className="w-full bg-[#111118] rounded-xl p-4 border border-white/10 focus:border-purple-500 outline-none"
                />


              </div>





              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  py-5
                  rounded-2xl
                  bg-purple-600
                  hover:bg-purple-500
                  transition
                  text-xl
                  font-bold
                  shadow-[0_0_30px_#8b5cf6]
                "
              >

                {loading
                  ? "Wysyłanie..."
                  : "💳 Przejdź do płatności"
                }

              </button>


            </form>


          </div>






          <div className="bg-[#0b0b10] rounded-3xl border border-purple-500/20 p-8 h-fit sticky top-10">


            <h2 className="text-3xl font-bold mb-8">
              Podsumowanie
            </h2>


            <div className="space-y-5">


              <div className="flex justify-between">
                <span className="text-gray-400">
                  Produkt
                </span>

                <span>
                  Surron Light Bee 2
                </span>
              </div>



              <div className="flex justify-between">

                <span className="text-gray-400">
                  Cena
                </span>

                <span>
                  29 999 zł
                </span>

              </div>



              <hr className="border-white/10" />



              <div className="flex justify-between text-2xl font-bold">

                <span>
                  Razem
                </span>

                <span className="text-purple-400">
                  29 999 zł
                </span>

              </div>


            </div>



            <p className="text-sm text-gray-500 mt-8 leading-6">

              Po kliknięciu przycisku zostaniesz przekierowany do
              bezpiecznej płatności Stripe.

            </p>


          </div>


        </div>


      </div>


    </main>
  );
}