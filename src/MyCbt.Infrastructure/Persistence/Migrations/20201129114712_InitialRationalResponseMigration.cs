using Microsoft.EntityFrameworkCore.Migrations;

namespace MyCbt.Infrastructure.Persistence.Migrations
{
    public partial class InitialRationalResponseMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RationalResponseExercises",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RationalResponseExercises", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RationalResponseEntry",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Statement = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Response = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RationalResponseExerciseId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RationalResponseEntry", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RationalResponseEntry_RationalResponseExercises_RationalResponseExerciseId",
                        column: x => x.RationalResponseExerciseId,
                        principalTable: "RationalResponseExercises",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RationalResponseEntry_RationalResponseExerciseId",
                table: "RationalResponseEntry",
                column: "RationalResponseExerciseId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RationalResponseEntry");

            migrationBuilder.DropTable(
                name: "RationalResponseExercises");
        }
    }
}
