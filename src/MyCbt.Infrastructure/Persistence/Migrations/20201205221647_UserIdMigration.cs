using Microsoft.EntityFrameworkCore.Migrations;

namespace MyCbt.Infrastructure.Persistence.Migrations
{
    public partial class UserIdMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "RationalResponseExercises",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "RationalResponseEntry",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserId",
                table: "RationalResponseExercises");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "RationalResponseEntry");
        }
    }
}
