using Newtonsoft.Json;

namespace AccountBalanceViewer.Models
{
    public class AccountRequest
    {
        [JsonProperty("Month")]
        public string? Month { get; set; }

        [JsonProperty("RandD")]
        public string? RandD { get; set; }

        [JsonProperty("Canteen")]

        public string? Canteen { get; set; }

        [JsonProperty("CEOCar")]

        public string? CEOCar { get; set; }

        [JsonProperty("Marketing")]

        public string? Marketing { get; set; }

        [JsonProperty("Parking")]

        public string? Parking { get; set; }

    }
}
