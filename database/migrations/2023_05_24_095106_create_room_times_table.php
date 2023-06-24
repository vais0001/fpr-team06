<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('room_times', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('room_id');
            $table->dateTime('time');
            $table->integer('co2');
            $table->integer('temperature');
            $table->integer('outside_temperature')->nullable();
            $table->boolean('booked')->nullable();
            $table->timestamps();

            $table->foreign('room_id')->references('id')->on('rooms')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('room_times');
    }
};
