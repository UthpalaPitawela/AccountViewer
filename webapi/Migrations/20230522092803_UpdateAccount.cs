using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace webapi.Migrations
{
    /// <inheritdoc />
    public partial class UpdateAccount : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Details",
                table: "Account",
                newName: "RandD");

            migrationBuilder.AddColumn<string>(
                name: "CEOCar",
                table: "Account",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Canteen",
                table: "Account",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Marketing",
                table: "Account",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Parking",
                table: "Account",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CEOCar",
                table: "Account");

            migrationBuilder.DropColumn(
                name: "Canteen",
                table: "Account");

            migrationBuilder.DropColumn(
                name: "Marketing",
                table: "Account");

            migrationBuilder.DropColumn(
                name: "Parking",
                table: "Account");

            migrationBuilder.RenameColumn(
                name: "RandD",
                table: "Account",
                newName: "Details");
        }
    }
}
